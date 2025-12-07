"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clientes } from "@/lib/clientes";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

export default function Clients() {
  const [searchCity, setSearchCity] = useState("");
  const [searchState, setSearchState] = useState("all");

  const filteredClients = useMemo(() => {
    return clientes.filter((client) => {
      const cityMatch = client.city
        .toLowerCase()
        .includes(searchCity.toLowerCase());

      const stateMatch = searchState === "all" || client.state === searchState;

      return cityMatch && stateMatch;
    });
  }, [searchCity, searchState]);

  const states = useMemo(() => {
    const uniqueStates = new Set(clientes.map((client) => client.state));
    return Array.from(uniqueStates);
  }, [clientes]);

  return (
    <div className="bg-white min-h-screen mt-12">
      <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-[#FFF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">
              Nossos clientes
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mt-4 mb-6 leading-tight">
              Municípios que confiam em nosso trabalho
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Orgulhosamente atendendo municípios em todo o Brasil com soluções
              de excelência em planejamento urbano e arquitetura.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <Input
                placeholder="Buscar por cidade..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="pl-12 h-12 border-neutral-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
              />
            </div>

            <Select value={searchState} onValueChange={setSearchState}>
              <SelectTrigger className="w-full md:w-64 h-12! border-neutral-300">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os estados</SelectItem>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="mt-4 text-sm text-neutral-600">
            Exibindo{" "}
            <span className="font-semibold text-[#FF6B35]">
              {filteredClients.length}
            </span>{" "}
            município{filteredClients.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredClients.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Nenhum município encontrado
              </h3>
              <p className="text-neutral-600">
                Tente ajustar seus filtros de busca
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {filteredClients.map((client, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square bg-white rounded-2xl p-6 flex items-center justify-center mb-3 border border-neutral-200 group-hover:border-[#FF6B35] group-hover:shadow-xl transition-all duration-300">
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={`Brasão de ${client.name}`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {client.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-[#FF6B35] transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{client.state}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
