import { useState, useEffect } from 'react';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call
        const fetchProjects = () => {
            const data = [
                {
                    id: 1,
                    title: "Salud conecta",
                    description: "Actualmente, un equipo de estudiantes del centro, estamos desarrollando una aplicación móvil, y WearOS para CaixaBank. Es una aplicación de salud, para controlar la salud de cualquier tipo de perfil, desde personas mayores, hasta jovenes deportistas."
                },
                {
                    id: 2,
                    title: "CRM",
                    description: "Durante el curso, nuestro primer proyecto fue crear un CRM, junto a mi grupo, lo hicimos sobre un restaurante. En el cual podías, como cliente, crear una cuenta, hacer una reserva, etc.; y como admin, gestionabamos a los clientes, productos, etc. Lo desarrollamos con Angular, y la gestión de los clientes se hizo mediante una base de datos y una API. También implementamos funciones de IA."
                }
            ];
            
            setTimeout(() => {
                setProjects(data);
                setLoading(false);
            }, 500);
        };

        fetchProjects();
    }, []);

    return { projects, loading };
};
