import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      formRef.current?.reset();
    } catch (error) {

    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Fale Conosco
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Entre em contato conosco para discutir seu projeto. Nossa equipe
            está pronta para ajudar.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Telefone</div>
              <a
                href="tel:+5504330174219"
                className="text-gray-600 hover:text-orange-600 transition-colors block"
              >
                (43) 3017-4219
              </a>
              <a
                href="tel:+5543991914219"
                className="text-gray-600 hover:text-orange-600 transition-colors block"
              >
                (43) 99191-4219
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Email</div>
              <a
                href="mailto:contato@mburb.com.br"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                contato@mburb.com.br
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">CAU</div>
              <p className="text-gray-600">A11950-4</p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-orange-700">
              Respondemos em até 24h
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-xl">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-gray-900 font-medium">
              Nome Completo *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              placeholder="Seu nome"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-gray-900 font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-900 font-medium">
                Telefone *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="subject" className="text-gray-900 font-medium">
              Assunto *
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              placeholder="Qual o assunto?"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-900 font-medium">
              Mensagem *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 min-h-32"
              placeholder="Conte-nos mais sobre seu projeto..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 text-white font-semibold py-6 text-lg"
          >
            Enviar Mensagem
            <Send className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
}
