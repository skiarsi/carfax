import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { Link } from '@inertiajs/react'
import { FormEventHandler } from 'react';
import { Checkbox } from '@headlessui/react';
import Header from '../../components/Header';



export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Welcome"></Head>
            <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
                <div className="h-[40px] bg-blue-500">
                    <Header />
                </div>
                <div className="flex-1 bg-blue-100 flex flex-col  pb-5">
                    &nbsp;
                </div>
            </div>
        </>
    );
}
