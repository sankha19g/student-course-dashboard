


const Profile = () => {
    return (
        <>
            <div className="w-full mx-6">
                <div className="w-full text-5xl text-white m-4">
                    <h1>Profile</h1>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:justify-between w-full m-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col w-full h-fit p-5 m-4 border border-white">
                            <h1 className='text-2xl mb-4'>
                                Personal Details
                            </h1>
                            <p>Name: [XYZ]</p>
                            <p>Email: [EMAIL_ADDRESS]</p>
                            <p>Phone: 1234567890</p>
                            <p>Address: [123 Main St]</p>
                            <p>City: [New York]</p>
                            <p>State: [NY]</p>
                            <p>Zip: [12345]</p>
                            <p>Country: [USA]</p>
                        </div>
                        <div className="flex flex-col w-full h-fit p-5 m-4 border border-white">
                            <h1 className='text-2xl mb-4'>
                                Academic Details
                            </h1>
                            <p>College : [ABC College]</p>
                            <p>Course : [Computer Science]</p>
                        </div>
                    </div>
                    <div className="border h-50 w-full md:w-60 flex items-center justify-center m-4 p-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTe98LUAVQ1ntFmElodqp9OdqSeM2ab-_jKCD7B1rQ_h7WBo0NMpd2Ro&s=10"
                            alt="ProfilePic" className='w-full h-full object-cover rounded-md' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile