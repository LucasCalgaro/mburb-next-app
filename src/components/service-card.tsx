
import {
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
    service: {
        name: string;
        slug: string;
        icon: ReactNode;
        category: string;
    };
}
export default function ServiceCard({ service }: ServiceCardProps) {


    return (
        <Link
            href={`/servicos/${service.slug}`}
            className="group block"
        >
            <div className="h-full bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#FF6B35] hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFE5DC] to-[#FFD4C4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                        {service.name}
                    </h3>

                    <div className="mt-auto flex items-center gap-2 text-[#FF6B35] text-sm font-medium">
                        <span>Saiba mais</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
}