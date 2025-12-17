import React, { useState } from 'react';
import PaystackPop from "@paystack/inline-js";
import Header from './Header';
import Footer from './Footer';
import { toast } from "react-toastify";

export default function Donate() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        purpose: '',
        project: '',
        amount: '',
    });

    const projects = [
        'Education Support',
        'Emergency Relief',
        'Healthcare',
        'Community Development',
        'Water & Sanitation',
        'Scholarship Program',
        'Food & Nutrition',
        'Child Protection',
        'Women Empowerment',
        'Environmental Sustainability',
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email) return toast.error("Email is required");
        if (Number(formData.amount) < 100)
            return toast.error("Minimum donation is ₦100");

        const paystack = new PaystackPop();

        paystack.newTransaction({
            key: "pk_live_a69c882542e904468c3b74ba3bdc788436f91514",
            email: formData.email,
            amount: Number(formData.amount) * 100,
            currency: "NGN",
            channels: ["card", "bank_transfer", "ussd"],
            metadata: {
                name: formData.name,
                phone: formData.phone,
                project: formData.project,
                purpose: formData.purpose,
                address: formData.address
            },
            onSuccess: async (transaction) => {
                try {
                    const res = await fetch("https://your-backend-url.onrender.com/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ reference: transaction.reference }),
                    });

                    const data = await res.json();

                    if (res.ok) {
                        toast.success("Donation verified successfully! 🎉");
                        console.log("Verified Data:", data);
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 3000);
                    } else {
                        toast.error("Verification failed");
                        console.log(data);
                    }

                } catch (err) {
                    console.error(err);
                    toast.error("Error verifying payment");
                }
            },
            onCancel: () => {
                toast.info("Payment was cancelled.");
            }
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow flex flex-col justify-center">
                <section className="flex-grow flex items-center justify-center py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 w-full">

                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Support Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Your donation helps us provide education, relief support,
                                and a brighter future for children in underserved communities.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                Donate Now
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block font-semibold">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold">Phone No *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold">Purpose</label>
                                    <input
                                        type="text"
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold">Select Project</label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3"
                                    >
                                        <option value="">-- Select Project --</option>
                                        {projects.map((proj, index) => (
                                            <option key={index} value={proj}>{proj}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-semibold">Amount (NGN) *</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
                                >
                                    Donate Now
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
