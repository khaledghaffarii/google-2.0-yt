function HeaderOption({Icon,selected,title}) {
    return (
        <div className={`flex items-center space-x-4 border-b-4 border-transparent mt-5 p-2 hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${ selected && "text-blue-500 border-blue-500"}`}>
            <Icon className="h-5"/>
            <p className="hidden sm:inline-flex">{title} </p>
        </div>
    );
}

export default HeaderOption;
