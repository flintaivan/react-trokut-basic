
const SidebarComponent = (props) => {
    // console.log(props.sidebarContent.sidebarTitle)
    return (
        <div className="col-span-3 text-indigo-900 rounded border-1 shadow-2xl border-indigo-900 px-4 py-8">
            <h2 className="ms-8 text-2xl">Sidebar</h2>
            <ul className="m-8 flex flex-col">
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum.</li>
            </ul>
        </div>
    ) 
}

export default SidebarComponent