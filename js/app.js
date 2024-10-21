const CONFIG ={
  // Estimated characters count for headline
  h_XS_CHARS_COUNT : 20,
  h_S_CHARS_COUNT: 25,
  h_M_CHARS_COUNT: 30,
  h_L_CHARS_COUNT: 35,
  h_XL_CHARS_COUNT: 40,
  h_XXL_CHARS_COUNT: 50,

  // Fonts for headline
  h_xs_font: '0.8rem',
  h_s_font:'1rem',
  h_m_font:'1.1rem',
  h_l_font:'1.2rem',
  h_xl_font:'1.3rem',

  // Estimated characters count for content
  c_S_CHARS_COUNT: 250,
  c_M_CHARS_COUNT: 300,
  c_L_CHARS_COUNT: 425,
  c_XL_CHARS_COUNT: 500,
  c_XXL_CHARS_COUNT: 575,

  // Fonts for content
  c_xs_font:'0.65rem',
  c_s_font:'0.7rem',
  c_m_font:'0.75rem',
  c_l_font:'0.8rem',
  c_xl_font:'0.9rem',

  // Line heights for content
  c_xs_line_height:'0.8rem',
  c_s_line_height:'0.8rem',
  c_m_line_height:'0.8rem',
  c_l_line_height:'0.8rem',
  c_xl_line_height:'1.2rem'
}

document.addEventListener('DOMContentLoaded',function(){
  responsiveCardTitleAdjuster();

});

// Handler for Responsive font size for Card's Title
// Call for parent then child to check for existence.
function responsiveCardTitleAdjuster(){
  const target_class_parent = ".card-title";
  const target_class_child = ".card-title-content";

  // Check for parent, proceed if exists.
  const rp_parent = document.querySelectorAll(target_class_parent);
  rp_parent.forEach(cardTitle=>{
      const child_content = cardTitle.querySelector(target_class_child);
      const child_content_length = child_content.textContent.trim().length;
      if(child_content_length > CONFIG.h_XL_CHARS_COUNT && child_content_length <= CONFIG.h_XXL_CHARS_COUNT){
        child_content.style.setProperty('font-size',CONFIG.h_xs_font,'important');
      }
      else if(child_content_length > CONFIG.h_L_CHARS_COUNT && child_content_length <= CONFIG.h_XL_CHARS_COUNT){
        child_content.style.setProperty('font-size',CONFIG.h_s_font,'important');
      }
      else if(child_content_length > CONFIG.h_M_CHARS_COUNT && child_content_length <= CONFIG.h_L_CHARS_COUNT){
        child_content.style.setProperty('font-size',CONFIG.h_s_font,'important');
      }
      else if(child_content_length > CONFIG.h_S_CHARS_COUNT && child_content_length <= CONFIG.h_M_CHARS_COUNT){
        child_content.style.setProperty('font-size',CONFIG.h_m_font,'important');
      }
      else if(child_content_length > CONFIG.h_XS_CHARS_COUNT && child_content_length <= CONFIG.h_S_CHARS_COUNT){
        child_content.style.setProperty('font-size',CONFIG.h_l_font,'important');
      }
      else if(child_content_length <= CONFIG.h_XS_CHARS_COUNT){
        child_content.style.setProperty('font-size',CONFIG.h_l_font,'important');
      }
      else{
        child_content.textContent = "Text is longer than 50 characters."
        child_content.style.setProperty('font-size',CONFIG.h_xs_font,'important');
      }
  });
}


function responsiveCardContentAdjuster (){

}
