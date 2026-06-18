const activity = [
    0, 0, 1, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 1, 1, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 0, 1,
];

const Activity = () => {
    return (
        <div className='bg-blue-500 w-full h-40 md:h-60 p-3 rounded-2xl mt-2 flex flex-col justify-between'>
            <h1 className='text-2xl font-semibold' >Activity</h1>

            <div className="grid grid-cols-10 gap-2 pb-8">
                {activity.map((item, index) => (
                    <div key={index} className={`h-4 w-4 hover:border hover:border-white cursor-pointer rounded-sm ${item ? "bg-green-400" : "bg-green-800"}`}
                    ></div>
                ))}
            </div>


        </div>
    )
}

export default Activity