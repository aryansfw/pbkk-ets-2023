import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

import { useState } from "react";

export default function Inventory({ auth, ...props }) {
    const [showAddItem, setShowAddItem] = useState(false);

    const { data, setData, processing, post, errors } = useForm({
        jenis: "",
        kondisi: "",
        keterangan: "",
        deskripsi_kecacatan: "",
        jumlah: "",
        gambar: "",
    });

    const addItem = (e) => {
        e.preventDefault();
        post(route("item.add"));
    };

    const closeModal = () => {
        setShowAddItem(false);
    };

    const itemOptions = {
        jenis: ["Smartphone", "Tablet", "Laptop", "Smart Watch"],
        kondisi: ["Baik", "Layak", "Rusak"],
    };

    console.log(showAddItem);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Inventory
                </h2>
            }
        >
            <Head title="Inventory" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <SecondaryButton onClick={() => setShowAddItem(true)}>
                            Add Item
                        </SecondaryButton>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <ul>
                    {props.items.map((item, index) => (
                        <li key={index}>
                            {item.jenis}
                            {item.kondisi}
                            {item.keterangan}
                            {item.deskripsi_kecacatan}
                            {item.jumlah}
                            <img src={item.gambar} />
                        </li>
                    ))}
                </ul>
            </div>

            <Modal show={showAddItem} onClose={closeModal}>
                <form onSubmit={addItem} className="p-6">
                    <div>
                        <InputLabel htmlFor="jenis" value="Jenis" />

                        <select
                            id="jenis"
                            value={data.jenis}
                            name="jenis"
                            className="w-full"
                            onChange={(e) => setData("jenis", e.target.value)}
                        >
                            {itemOptions.jenis.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>

                        <InputError message={errors.jenis} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="kondisi" value="Kondisi" />
                        <select
                            id="kondisi"
                            value={data.kondisi}
                            name="kondisi"
                            className="w-full"
                            onChange={(e) => setData("kondisi", e.target.value)}
                        >
                            {itemOptions.kondisi.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.kondisi} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="keterangan" value="Keterangan" />

                        <TextInput
                            id="keterangan"
                            type="text"
                            name="keterangan"
                            value={data.keterangan}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("keterangan", e.target.value)
                            }
                        ></TextInput>

                        <InputError
                            message={errors.keterangan}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="deskripsi_kecacatan"
                            value="Kecacatan (Jika Ada)"
                        />

                        <TextInput
                            id="deskripsi_kecacatan"
                            type="text"
                            name="deskripsi_kecacatan"
                            value={data.deskripsi_kecacatan}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("deskripsi_kecacatan", e.target.value)
                            }
                        ></TextInput>

                        <InputError
                            message={errors.deskripsi_kecacatan}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="jumlah" value="Jumlah" />

                        <TextInput
                            id="jumlah"
                            type="number"
                            name="jumlah"
                            value={data.jumlah}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("jumlah", e.target.value)}
                        ></TextInput>

                        <InputError message={errors.jumlah} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="gambar" value="Gambar" />

                        <input
                            id="gambar"
                            type="file"
                            name="gambar"
                            value={data.gambar}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("gambar", e.target.value)}
                        ></input>

                        <InputError message={errors.jumlah} className="mt-2" />
                    </div>

                    <PrimaryButton className="mt-4 " disabled={processing}>
                        Add Item
                    </PrimaryButton>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
