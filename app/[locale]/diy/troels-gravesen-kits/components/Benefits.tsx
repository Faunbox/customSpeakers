import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";



const Benefits = () => {
  
     const t = useTranslations("Troels_why");
  const benefits = [
  "point1",
  "point2",
  "point3",
  "point4",
  "point5",
  "point6",

]

    return (  <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">{t("title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{t(`${benefit}`)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> );
}
 
export default Benefits;