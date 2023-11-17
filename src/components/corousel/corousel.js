import './corousel.css'

function Slider (){

    return(
        <section>
            <div className="opt" id='left'>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-chevron-left" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
             </svg>
            </div>
            <div className="imgslide">
                <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1635427407/pvazlh7lsdpxui8tokce.jpg" alt="" />
            </div>
            <div className="imgslide">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1698603955302_web.jpg" alt="" />
            </div>
            <div className="imgslide">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1700146033284_webpage.jpg" alt="" />
            </div>
            <div className="imgslide">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1699618284313_diwalidesktop.jpg" alt="" />
            </div>
            <div className="imgslide">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1699441975813_webshowcase1240x300.jpg" alt="" />
            </div>
            <div className="opt" id='right'>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
        </section>
    )
}

export default Slider;