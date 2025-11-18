


gsap.from('.page_1h1' , {
  y: 200,
  duration: 2,
  autoAlpha : 0
})

gsap.from('.paragraph_pag_1_p1' ,{
  y:100,
  duration : 3 , 
  autoAlpha : 0,
  stragger: 1
})




gsap.from(".container_mounatines" , {
    y: 100,
    duration: 2,
    scrollTrigger: {
      trigger: ".container_mounatines",
      start: "top center", 
      end: "bottom 100px",
      scrub: true, 
    }
})


gsap.from('.container_left_tree' , {
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".container_left_tree",
    start: "top center", 
    end: "bottom 100px",
    scrub: true, 
  }
  
})

gsap.from('.container_right_tree' , {
  y : 10 ,
  duration : 2,
  scrollTrigger : {
    trigger : '.container_right_tree',
    start : "top center",
    end : "bottom 100px",
    scrub : 2 ,
  }
})
gsap.from('.container_left_gates' , {
  y : 100 ,
  duration : 2,
  scrollTrigger : {
    trigger : '.container_left_gates',
    start : "top center",
    end : "bottom 100px",
    scrub : 2 ,
  }
})
gsap.from('.container_right_gates' , {
  y : 100 ,
  duration : 2,
  scrollTrigger : {
    trigger : '.container_right_gates',
    start : "top center",
    end : "bottom 100px",
    scrub : 2 ,
  }
})
gsap.from('.container_center_gate' , {
  y : -50 ,
  duration : 2,
  scrollTrigger : {
    trigger : '.container_center_gate',
    start : "top center",
    end : "bottom 100px",
    scrub : 2 ,
  }
})
gsap.from('.container_gate_big' , {
  y : -100 ,
  duration : 2,
  scrollTrigger : {
    trigger : '.container_gate_big',
    start : "top center",
    end : "bottom 100px",
    scrub : 2 ,
  }
})
gsap.from('.container_larger_gate' , {
  y : -200 ,
  duration : 2,
  scrollTrigger : {
    trigger : '.container_larger_gate',
    start : "top center",
    end : "bottom 100px",
    scrub : 2 ,
  }
})












// page - 2 
gsap.from('.gaeding_pg2_1' ,{
  x: -200 , 
  scrollTrigger : {
    trigger :'.gaeding_pg2_1' , 
    start : "top 100% ",
    end : "top -200%",
    scrub : true,
  }
})
gsap.from('.gaeding_pg2_2' ,{
  x: 200 , 
  scrollTrigger : {
    trigger :'.gaeding_pg2_1' , 
    start : "top 100% ",
    end : "top -200%",
    scrub : true,
  }
})

gsap.from('.container_top_part_p2_1' , {
    y: -50 , 
    scrollTrigger : {
      trigger : '.container_top_part_p2_1' , 
      start : "top 100% ",
      end : "top -200%",
      scrub : true,
    }
})

gsap.from('.container_down_part_p2_1' , {
    y: -10 , 
    autoAlpha : 0,
    scrollTrigger : {
      trigger : '.container_down_part_p2_1' , 
      start : "top 350%",
      end : "top -100%",
      scrub : 2
    }
})

gsap.from('.container_top_part_p2_2' , {
    y: -50 , 
    scrollTrigger : {
      trigger : '.container_top_part_p2_2' , 
      start : "top 100% ",
      end : "top -200%",
      scrub : true,
    }
})

gsap.from('.container_down_part_p2_2' , {
    y: 10 , 
    autoAlpha : 0,
    scrollTrigger : {
      trigger : '.container_down_part_p2_2' , 
      start : "top 350%",
      end : "top -100%",
      scrub : 2
    }
})

gsap.from('.container_top_part_p2_3' , {
    y: -50 , 
    scrollTrigger : {
      trigger : '.container_top_part_p2_3' , 
      start : "top 100% ",
      end : "top -200%",
      scrub : true,
    }
})

gsap.from('.container_down_part_p2_3' , {
    y: 10 , 
    autoAlpha : 0,
    scrollTrigger : {
      trigger : '.container_down_part_p2_3' , 
      start : "top 350%",
      end : "top -100%",
      scrub : 2
    }
})






gsap.from('.heading_leaf_right_p2_1' , {
  x: -100 , 
  autoAlpha : 0,
  scrollTrigger : {
    trigger : '.heading_leaf_right_p2_1' , 
    start : "top 200%",
    end : "top -100%",
    scrub : 3,
  }
})
gsap.from('.heading_leaf_left_p2_2' , {
  x: 10 , 
  autoAlpha : 0,
  scrollTrigger : {
    trigger : '.heading_leaf_left_p2_2' , 
    start : "top 200%",
    end : "top -100%",
    scrub : 3,
  }
})



// heading _ slide _ 1 
gsap.to(".container_first_part_heading" , {
  x:-2900 ,
  scrollTrigger : {
    trigger : ".container_slide_heading",
  
    scrub : 3 ,
    start : " top 300%",
    end : "top -100%",
    pin : true ,
  }
})







// page 3 
gsap.from(".content_1_page_3" , {
  y:-100 ,
  x:200 ,
  autoAlpha : 0,
  color : "white",
  scrollTrigger : {
    trigger : ".content_1_page_3",
    scrub : 2 , 
    start : "top 100%",
    end : " -20px",

   
  }
})






gsap.from(".content_2_page_3" , {
  y:-100 ,
  x: 200 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".content_2_page_3",
    scrub : 2 , 
    start : "top 100%",
    end : " -20px",

   
  }
})

gsap.from(".content_3_page_3" , {
  y:-100 ,
  x : -200 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".content_3_page_3",
    scrub : 2 , 
    start : "top 100%",
    end : " -20px",

   
  }
})

gsap.from(".content_4_page_3" , {
  y:-100 ,
  x :-200 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".content_4_page_3",
    scrub : 2 , 
    start : "top 100%",
    end : " -20px",

   
  }
})
// Ancient Athletics
gsap.from(".container_Ancient_1" , {
  y :100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Ancient_1",
    scrub : 2 , 
    start : "top 120%",
    end : " 100px",

   
  }
})
gsap.from(".container_Ancient_2" , {
  y :-100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Ancient_2",
    scrub : 2 , 
    start : "bottom 120%",
    end : " 10px",

   
  }
})
gsap.from(".container_Ancient_3" , {
  y :100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Ancient_3",
    scrub : 2 , 
    start : "top 120%",
    end : " -20px",

   
  }
})
gsap.from(".container_Ancient_4" , {
  y :-100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Ancient_4",
    scrub : 2 , 
   start : "bottom 120%",
    end : " -20px",

   
  }
})
gsap.from(".container_Ancient_5" , {
  y :100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Ancient_5",
    scrub : 2 , 
    start : "top 120%",
    end : " -20px",

   
  }
})
gsap.from(".container_Ancient_6" , {
  y :-100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Ancient_6",
    scrub : 2 , 
    start : "bottom 120%",
    end : " -20px",

   
  }
})
gsap.from(".container_Ancient_7" , {
  y :100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Ancient_7",
    scrub : 2 , 
    start : "top 120%",
    end : " -20px",

   
  }
})
// broken

gsap.from(".container_heading_Borken_Heart" , {

  y: 30 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_heading_Borken_Heart",
    scrub : 2 , 
    start : "bottom 100%",
    end : " 20px",

   
  }
})



gsap.from(".container_paragraph_1" , {

  y: 200 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_paragraph_1",
    scrub : 2 , 
    start : "top 100%",
    end : " 20px",

   
  }
})

gsap.from(".container_Broken_Upper_img" , {

  y: -200 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Broken_Upper_img",
    scrub : 2 , 
    start : "bottom 100%",
    end : " 20px",

   
  }
})



gsap.from(".container_Broken_down_img" , {

  y: 200 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : ".container_Broken_down_img",
    scrub : 2 , 
    start : "top 100%",
    end : " 20px",

   
  }
})


// paragraph animations 
gsap.from("._co_para_ant_1" , {

  y: 200 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : "._co_para_ant_1",
    scrub : 2 , 
    start : "top 100%",
    end : " 20px",

   
  }
})
gsap.from("._co_para_ant_2" , {

  y: -100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : "._co_para_ant_2",
    scrub : 2 , 
    start : "top 100%",
    end : " 20px",

   
  }
})
gsap.from("._co_para_ant_3" , {

  y: -100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : "._co_para_ant_3",
    scrub : 2 , 
    start : "top 100%",
    end : " 20px",

   
  }
})
gsap.from("._co_para_ant_4" , {

  y: -100 ,
  autoAlpha : 0,
  scrollTrigger : {
    trigger : "._co_para_ant_4",
    scrub : 2 , 
    start : "top 100%",
    end : " 20px",

   
  }
})