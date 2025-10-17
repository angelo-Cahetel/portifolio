import React from "react";
import emailjs from "@emailjs/browser";

const Contato = () => {
    const formRef = useRef();
    const [form, setForm] = useState ({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState (false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setForm ({
        
            ...form,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send (
            'service_andwsi5',
            'template_r208yxw',
            {
                from_name: form.name,
                to_name: "Angelo Cahetel",
                from_email: form.email,
                to_email: "angelo030825@gmail.com",
                message: form.message,
            },
            'ThPqrdc7U1nYAM7cv'
        )
        .then (
            () => {
                setLoading(false);
                alert ("Obrigado. Entrarei em contato o mais breve possível.");

                setForm ({
                    name: "",
                    email: "",
                    message: "",
                });
            },
            (error) => {
                setLoading(false);
                console.log (error);
                alert ("Algo deu errado. Por favor, tente novamente.");
            }
        );
    };
    
}