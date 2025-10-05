"use server"

import nodemailer from "nodemailer"


type ResponseData = {
  status: "success" | "error"
  message: string
}

export async function sendContactEmail(formData: FormData, lng: string): Promise<ResponseData> {
  try {
    // Extract form data
    const name = formData.get("name")?.toString()
    const email = formData.get("email")?.toString()
    const message = formData.get("description")?.toString()
    console.log("Language:", lng)
    console.log("Form data received:", { name, email, message })

    // Validate required fields
    if (!name || !email || !message) {
      return {
        status: "error",
        message: "Wszystkie pola są wymagane.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        status: "error",
        message: "Nieprawidłowy format adresu email.",
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to company
    const mailToCompany = {
      from: process.env.SMTP_FROM_EMAIL,
      to: ["faunbox2@gmail.com", "iron_imp@op.pl", "kontakt@mfcustoms.pl"],
      subject: `Wiadomość z formularza kontaktowego od ${name}`,
      text: `
        Nowa wiadomość z formularza kontaktowego:
        
        Imię: ${name}
        Email: ${email}
        Wiadomość: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            Nowa wiadomość z formularza kontaktowego
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Imię:</strong> ${name}</p>
            <p><strong>Adres email:</strong> ${email}</p>
            <p><strong>Wiadomość:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8b5cf6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Ta wiadomość została wysłana z formularza kontaktowego na stronie www.mfcustoms.pl.
          </p>
        </div>
      `,
    }

    // Optional: Send confirmation email to customer
    const mailToCustomer = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: "Potwierdzenie otrzymania wiadomości - MF Customs",
      text: `
        Cześć ${name},
        
        Dziękujemy za skontaktowanie się z nami! Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.
        
        Twoja wiadomość:
        ${message}
        
        Pozdrawiamy,
        Zespół MF Custom Speakers
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            Dziękujemy za kontakt!
          </h2>
          <p>Cześć ${name},</p>
          <p>Dziękujemy za skontaktowanie się z nami! Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8b5cf6; margin-top: 0;">Twoja wiadomość:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8b5cf6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p>Pozdrawiamy,<br><strong>Zespół MF Customs</strong></p>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; color: #666; font-size: 12px;">
            <p>MF Custom Speakers</p>
            <p>34-330 Trzebinia, Łączna 15, Polska</p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(mailToCompany)

    // Optionally send confirmation email to customer
    if (process.env.SEND_CUSTOMER_CONFIRMATION === "true") {
      await transporter.sendMail(mailToCustomer)
    }

    return {
      status: "success",
      message: "Wysłano Twoją wiadomość! Odpowiemy najszybciej jak to możliwe.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      status: "error",
      message: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
    }
  }
}
