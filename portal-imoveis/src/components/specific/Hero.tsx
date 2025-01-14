'use client';

import React, { useEffect, useRef, useState } from "react";
import HeroBg from "@/../public/hero-bg.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

type NumberOfRoomsType = 'all' | '1' | '2' | '3' | '4';

export default function Hero() {
    const [showNumberOfRoomsModal, setShowNumberOfRoomsModal] = useState(false);
    const [locationInput, setLocationInput] = useState("");
    const [selectedNumberOfRooms, setSelectedNumberOfRooms] = useState<NumberOfRoomsType>("all");
    const [numberOfRoomsValue, setNumberOfRoomsValue] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const numberOfRoomsRef = useRef<HTMLDivElement>(null);

    // Mock dos endereços para não precisar fazer uma integração com o google maps
    const addressSuggestions = [
        "Av. José Faria da Rocha, Eldorado, Contagem - MG",
        "Rua José Faria de Barros, Parque Imperial, Salto - SP",
        "Rua José Faria de Almeida, Jardim das Palmeiras, Boituva - MG",
        "Rua José Faria de Carvalho, Pouso Alegre - MG",
        "Avenida José Maria de Faria, Lapa de Baixo, São Paulo - SP",
    ];

    const handleInputChange = (value: string) => {
        setLocationInput(value);
        if (value.trim() === "") {
        setSuggestions([]);
        } else {
        setSuggestions(
            addressSuggestions.filter((address) =>
            address.toLowerCase().includes(value.toLowerCase())
            )
        );
        }
    };

    function handleChangeNumberOfRooms(numberOfRooms: NumberOfRoomsType){
        setSelectedNumberOfRooms(numberOfRooms);
        setNumberOfRoomsValue(numberOfRooms === 'all' ? 'Todos' : `${numberOfRooms}+ Quartos`)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
          numberOfRoomsRef.current &&
          !numberOfRoomsRef.current.contains(event.target as Node)
        ) {
          setShowNumberOfRoomsModal(false);
        }
    };

      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
        style={{
            backgroundImage: `url(${HeroBg.src})`,
        }}
        className="w-full h-[640px] bg-cover bg-no-repeat pt-[114px] flex flex-col items-center"
        >
        <h1 className="text-[42px] text-white font-bold mb-8">
            Vende. Aluga. Conecta.
        </h1>
        <div className="bg-white h-[78px] w-[771px] rounded-full border border-border-bg flex relative">
            <div className="flex flex-col gap-[6px] hover:bg-grey-extra-light h-full rounded-full w-[414px] p-[10px] pl-[24px] transition-custom">
            <div className="flex gap-1 items-center">
                <IoLocationSharp className="text-grey-light" />
                <strong className="text-[14px] font-bold">Localização</strong>
            </div>
            <input
                type="text"
                placeholder="Qual é a localização?"
                className="outline-none bg-transparent truncate"
                value={locationInput}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            {suggestions.length > 0 && (
                <div className="absolute top-[86px] w-[302px] left-0 rounded-2xl bg-white border border-border-bg shadow-lg z-10 no-scrollbar">
                <ul className="max-h-[200px] overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                    <li
                        key={index}
                        className="p-4 cursor-pointer hover:bg-grey-extra-light flex items-center gap-2 text-grey-light"
                        onClick={() => setLocationInput(suggestion)}
                    >
                        <IoLocationSharp size={24}/>
                        {suggestion}
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </div>
            <div className="ml-[-15px] flex justify-between items-center gap-[6px] hover:bg-grey-extra-light h-full rounded-full w-[414px] p-[10px] pl-[24px] transition-custom">
            <div className="flex flex-col h-full gap-[6px]">
                <div className="flex gap-1 items-center">
                <FaBed className="text-grey-light" />
                <strong className="text-[14px] font-bold">N° de Quartos</strong>
                </div>
                <input
                    type="text"
                    placeholder="Quantos quartos?"
                    className="outline-none bg-transparent"
                    value={numberOfRoomsValue}
                    onFocus={() => setShowNumberOfRoomsModal(true)}
                />
            </div>
            {
                showNumberOfRoomsModal && (
                    <div 
                        className="absolute top-[86px] w-[333px] rigth-0 rounded-2xl bg-white border border-border-bg shadow-lg z-10 no-scrollbar px-6 py-3"
                        ref={numberOfRoomsRef}
                    >
                        <span className="text-black mb-3">Número de quartos</span>
                        <div className="flex gap-3 mb-3">
                            <button onClick={() => handleChangeNumberOfRooms('all')} className={`rounded-full border border-border-bg p-3 text-black text-sm font-semibold ${selectedNumberOfRooms === 'all' ? 'text-purple border-purple bg-slate-200' : ''}`}>Todos</button>
                            <button onClick={() => handleChangeNumberOfRooms('1')} className={`rounded-full border border-border-bg p-3 text-black text-sm font-semibold ${selectedNumberOfRooms === '1' ? 'text-purple border-purple bg-slate-200' : ''}`}>1+</button>
                            <button onClick={() => handleChangeNumberOfRooms('2')} className={`rounded-full border border-border-bg p-3 text-black text-sm font-semibold ${selectedNumberOfRooms === '2' ? 'text-purple border-purple bg-slate-200' : ''}`}>2+</button>
                            <button onClick={() => handleChangeNumberOfRooms('3')} className={`rounded-full border border-border-bg p-3 text-black text-sm font-semibold ${selectedNumberOfRooms === '3' ? 'text-purple border-purple bg-slate-200' : ''}`}>3+</button>
                            <button onClick={() => handleChangeNumberOfRooms('4')} className={`rounded-full border border-border-bg p-3 text-black text-sm font-semibold ${selectedNumberOfRooms === '4' ? 'text-purple border-purple bg-slate-200' : ''}`}>4+</button>
                        </div>
                        <p className="text-black">Tipo de propriedade</p>
                        <select name="propertyType" id="propertyType" className="px-3 py-2 outline-none border border-border-bg rounded-md w-full mt-2 text-sm">
                            <option value="todos">Todos os tipos</option>
                            <option value="apartamento">Apartamento</option>
                            <option value="casa">Casa</option>
                            <option value="loja">Loja</option>
                            <option value="terreno">Terreno</option>
                        </select>
                    </div>
                )
            }
            
            <div className="bg-orange w-[58px] h-[58px] cursor-pointer rounded-full flex justify-center items-center hover:bg-orange-dark">
                <BiSearchAlt className="text-white" size={24} />
            </div>
            </div>
        </div>
        </div>
    );
}
