let navbar = () => {
    return `<img src="https://images.squarespace-cdn.com/content/v1/60623d43a545b07121150c8e/dc72d6e0-ea69-4147-946a-62fe91e5dba8/sports+iq+white-02.png" alt="">
    <a href="live.html" title="Live Cricket Score">Live Scores</a>
    <a href="shedule.html" title="Cricket Schedule">Schedule</a>
    <a href="archives.html" title="Cricket Scorecard Archives">Archives</a>
     <div title="News"  class="icon dropMenu">
        <a href="">News</a>
        <i class="fa-solid fa-caret-down"></i>
        <div id="news_drop">
        <a href="1news.html" title="Latest Cricket News">All Stories</a> 
        <a href="news.html" title="Latest Cricket News">latest News</a>
        </div>
    </div>
    
    <div title="Cricket Teams" class="icon dropMenu">
        <a href="">Teams</a>
        <i class="fa-solid fa-caret-down"></i>
        <div >

       
        <div id="teams_Drop">
            <div>
           <h4>Test Teams</h4> 
           <a href="ind.html" title="India Cricket Team">India</a>

           <a href="ir.html" title="Ireland Cricket Team">Ireland</a>

           <a href="pak.html" title="Pakistan Cricket Team">Pakistan</a>

           <a href="aus.html" title="Australia Cricket Team">Australia</a>

           <a href="bang.html" title="Bangladesh Cricket Team">Bangladesh</a>

           <a href="eng.html" title="England Cricket Team">England</a>

           <a href="west.html" title="West Indies Cricket Team">West Indies</a>

           <a href="south.html" title="South Africa Cricket Team">South Africa</a>


           <a href="afgha.html" title="Afghanistan Cricket Team">Afghanistan</a>
        </div>
         <a href="" id="teams_Drop_more" title="Cricket teams" style="color: blue;">More...</a>
        </div>
    </div>
    </div>
    <div title="Cricket Videos" class="icon dropMenu">
       <a href="./video.html">Videos</a>
       <i class="fa-solid fa-caret-down"></i>
       <div id="videos_drop">
        <a href="./video.html" title="All Cricket Videos">All Videos</a>
       </div>
    </div>
    <div title="ICC Rankings" class="icon dropMenu">
        <a href="./ranking.html">Rankings</a>
        <i class="fa-solid fa-caret-down"></i>
        <div id="rankings_drop">
           <a href="./ranking.html" title="ICC Rankings Men">ICC Rankings - Men</a> 
           <a href="./women_ranking.html" title="ICC Rankings Women">ICC Rankings - Women</a> 
        </div>

    </div>
    <div class="icon dropMenu">
       <a>More</a> 
       <i class="fa-solid fa-caret-down"></i>
       <div id="more_drop">
        <a href="./p_phothos.html" title="Photo Gallery">Photos</a>
        
        
        <a href="./faq.html" title="Contact Us">Contact Us</a>
       </div>
    </div>
    <i class="fa fa-search changeOfNavi" ></i>
    <a href="accontinfo.html"><i class='far fa-user-circle changeOfNavi'></i></a>`;
}

export default navbar;
//<a href="accontinfo.html"><i class='far fa-user-circle changeOfNavi'></i></a>
// <a href="" title="Cricket Quiz">Quiz</a>
// <a href="" title="Mobile Apps">Mobile Apps</a>
// <a href="" title="Careers">Careers</a>