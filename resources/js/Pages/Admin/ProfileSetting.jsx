import React, { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import LayoutSetting from '@/Components/Layout/LayoutSetting';
import MainTitle from '@/Components/Shared/MainTitle';
import ProfilePictureUploader from '@/Components/Partials/ProfilePictureUploader';
import Toaster from '@/Components/Toaster/Toaster';

const ProfileSetting = () => {
    const { auth, pendingAdmins } = usePage().props;
    const userRole = auth.user.role;

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        username: '',
        profile_picture_url: '',
    });

    const [showToaster, setShowToaster] = useState(false);
    const [toasterType, setToasterType] = useState('');
    const [toasterMessage, setToasterMessage] = useState('');

    useEffect(() => {
        if (auth && auth.user) {
            setData({
                name: auth.user.name || '',
                username: auth.user.username || '',
                profile_picture_url: auth.user.profile_picture || '',
            });
        }
    }, [auth]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowToaster(false); // Reset toaster before new request

        post(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => {
                setToasterType('success');
                setToasterMessage('Profile updated successfully');
                setShowToaster(true);
            },
            onError: () => {
                setToasterType('warning');
                setToasterMessage('Failed to update profile. Please check the form for errors.');
                setShowToaster(true);
            },
        });
    };

    const handleUploadSuccess = (url) => {
        setData('profile_picture_url', url);
    };

    return (
        <LayoutSetting userRole={userRole} pendingAdmins={pendingAdmins}>
            <MainTitle
                title="Profile Setting"
                description="This is how others will see you on the site."
            />
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-2 py-1">
                    <label
                        className="block text-sm font-bold text-gray-700"
                        htmlFor="name"
                    >
                        Nama
                    </label>
                    <input
                        className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-80 rounded-lg placeholder:text-sm placeholder:font-semibold border border-gray-300 focus:outline-none focus:border-black focus:ring-0"
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Your Name"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name}</span>
                    )}
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        This is your public display name. It can be your real name
                        or a pseudonym.
                    </p>
                </div>

                {/* Username Field */}
                <div className="flex flex-col gap-2 py-1">
                    <label
                        className="block text-sm font-bold text-gray-700"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-80 rounded-lg placeholder:text-sm placeholder:font-semibold border border-gray-300 focus:outline-none focus:border-black focus:ring-0"
                        type="text"
                        name="username"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        placeholder="Your Username"
                    />
                    {errors.username && (
                        <span className="text-red-500 text-sm">{errors.username}</span>
                    )}
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        This is your public display username. It can be your fake
                        name.
                    </p>
                </div>

                {/* Profile Picture Uploader */}
                <div className="flex flex-col gap-2 py-1">
                    <ProfilePictureUploader
                        onUploadSuccess={handleUploadSuccess}
                        currentImage={data.profile_picture_url}
                    />
                    {errors.profile_picture_url && (
                        <span className="text-red-500 text-sm">{errors.profile_picture_url}</span>
                    )}
                </div>

                {/* Save Changes Button */}
                <button
                    type="submit"
                    className="px-4 py-3 rounded-lg w-32 text-sm font-semibold bg-black bg-opacity-100 hover:bg-opacity-80 text-white"
                    disabled={processing}
                >
                    {processing ? 'Saving...' : 'Save Changes'}
                </button>
            </form>

            {showToaster && (
                <Toaster
                    type={toasterType}
                    message={toasterMessage}
                />
            )}
        </LayoutSetting>
    );
};

export default ProfileSetting;