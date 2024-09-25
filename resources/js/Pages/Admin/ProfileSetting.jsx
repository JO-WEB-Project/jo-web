import React from 'react'
import LayoutSetting from '@/Components/Layout/LayoutSetting'
import MainTitle from '@/Components/Shared/MainTitle'
import ProfilePictureUploader from '@/Components/Partials/ProfilePictureUploader'

const ProfileSetting = () => {
  return (
      <LayoutSetting>
          <MainTitle
              title="Profile Setting"
              description="This is how others will see you on the site."
          />
          <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 py-1">
                  <label
                      className="block text-sm font-bold text-gray-700"
                      htmlFor="nama"
                  >
                      Nama
                  </label>
                  <input
                      className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-80 rounded-lg placeholder:text-sm placeholder:font-semibold border-gray-300 focus:outline-none focus:border-black focus:ring-0"
                      type="text"
                      placeholder="Dimas Fiebry Prayhoga Putra"
                  />
                  <p className="text-sm text-opacity-60 text-black font-medium">
                      This is your public display name. It can be your real name
                      or a pseudonym.
                  </p>
              </div>

              <div className="flex flex-col gap-2 py-1">
                  <label
                      className="block text-sm font-bold text-gray-700"
                      htmlFor="username"
                  >
                      Username
                  </label>
                  <input
                      className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-80 rounded-lg placeholder:text-sm placeholder:font-semibold border-gray-300 focus:outline-none focus:border-black focus:ring-0"
                      type="text"
                      placeholder="Fiebryhoga"
                  />
                  <p className="text-sm text-opacity-60 text-black font-medium">
                      This is your public display username. It can be your fake
                      name.
                  </p>
              </div>
              <div className="flex flex-col gap-2 py-1">
                  <ProfilePictureUploader/>
              </div>
              <button className='px-4 py-3 rounded-lg w-32 text-sm font-semibold bg-black bg-opacity-100 hover:bg-opacity-80 text-white'>
                Save Changes
              </button>
          </div>
      </LayoutSetting>
  );
}

export default ProfileSetting
