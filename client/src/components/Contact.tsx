import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">تواصل معنا</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              نحن هنا للإجابة على استفساراتكم ومناقشة مشاريعكم القادمة. لا تتردد في التواصل معنا للحصول على استشارة مجانية.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">الموقع</h3>
                  <p className="text-muted-foreground">الرياض، المملكة العربية السعودية<br/>حي العقيق، طريق الملك فهد</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">الهاتف</h3>
                  <p className="text-muted-foreground" dir="ltr">+966 50 000 0000</p>
                  <p className="text-muted-foreground" dir="ltr">+966 11 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground">info@amariah-alohood.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">ساعات العمل</h3>
                  <p className="text-muted-foreground">الأحد - الخميس: 8:00 ص - 5:00 م</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border bg-card/50 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">الاسم</label>
                    <Input placeholder="الاسم الكامل" className="bg-background border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">رقم الهاتف</label>
                    <Input placeholder="050xxxxxxx" className="bg-background border-border/50 focus:border-primary" dir="ltr" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">البريد الإلكتروني</label>
                  <Input type="email" placeholder="name@example.com" className="bg-background border-border/50 focus:border-primary" dir="ltr" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">الرسالة</label>
                  <Textarea placeholder="كيف يمكننا مساعدتك؟" className="min-h-[150px] bg-background border-border/50 focus:border-primary" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6">
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
