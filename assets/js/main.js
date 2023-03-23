$(function(){
    /**
     * side-menu
     */

    $('.side-area').click(function(){
        if (!$(this).hasClass('active')) {
            menuMotion.restart()
        }

        $('.side-area, .side-inner,.btn-wrap').toggleClass('active');    
    })


   const menuMotion = gsap.from('.header .side-inner .link-top',{

    yPercent:100,
    stagger:0.1,
    opacity:0,
    paused:true,

   })

   
   
   gsap.set('.sc-title .back',{opacity:0})

   const intro = gsap.timeline({
    onComplete:function(){
        $('.header').addClass('show');
        // $('.sc-title .title-wrap .char').addClass('on');
        // introTextMotion.play();
    }
   })

   intro
   
   .from('.sc-title .title-wrap .char',{
    delay:1.5,
    opacity:0,
    stagger:{
        from:'random',
        amount:1.3,
    },
   })

   .addLabel('z')
   .to('.sc-title .back',{
    opacity:1,
   },'z')   
   .to('.sc-title .front',{
    opacity:0, 
   },'z')   

   .to('.sc-title .title-wrap',{
    scale:0.9,  

    onComplete:function(){
        $('.sc-title .title-wrap .char').addClass('on');
        introTextMotion.play();
    }
   })   
   .addLabel('a')  
  .to('.sc-title .char1',{ duration:1, yPercent:50, xPercent:40, rotation:20, scale:2.5,},'a')
  .to('.sc-title .char2',{ duration:1, yPercent:-30, xPercent:30, rotation:0, },'a')
  .to('.sc-title .char4',{ duration:1, yPercent:-30, xPercent:50, rotation:10, },'a')
  .to('.sc-title .char3',{ duration:1, yPercent:100, xPercent:50, rotation:30, opacity:0},'a')
  .to('.sc-title .char5',{ duration:1, yPercent:80, xPercent:-30, rotation:-30, opacity:0},'a')
  .to('.sc-title .char6',{ duration:1, yPercent:50, xPercent:-80, rotation:-45,'filter':'blur(10px)' },'a')
  .to('.sc-title .char7',{ duration:1, yPercent:-40, xPercent:80, rotation:-30,scale:2,'filter':'blur(2px)' },'a')
  .to('.sc-title .char8',{ duration:1, yPercent:70, xPercent:40, rotation:-10, },'a')
  .to('.sc-title .char9',{ duration:1, yPercent:70, xPercent:-90, rotation:30, 'filter':'blur(5px)',scale:1.7},'a')
  .to('.sc-title .char10',{duration:1, yPercent:-50, xPercent:70, rotation:60,'filter':'blur(5px)' },'a')
  .to('.sc-title .char11',{duration:1, yPercent:150, xPercent:50, rotation:-45,scale:1.4, },'a')
  .to('.sc-title .char12',{duration:1, yPercent:-50, xPercent:20, rotation:100, 'filter':'blur(5px)',scale:1.5 },'a')
  .to('.sc-title .char13',{duration:1, yPercent:-50, xPercent:-60, rotation:-10, scale:1.2,'filter':'blur(7px)'},'a')
  .to('.sc-title .char14',{duration:1, yPercent:-60, xPercent:-60, rotation:10, opacity:0 },'a')
  .to('.sc-title .char15',{duration:1, yPercent:-150, xPercent:0, rotation:10, opacity:0 },'a')
  .to('.sc-title .char16',{duration:1, yPercent:-50, xPercent:-10, rotation:60, opacity:0 },'a')
  .to('.sc-title .char17',{duration:1, yPercent:30, xPercent:-30, rotation:-10,opacity:0,  },'a')
  .to('.sc-title .char18',{duration:1, yPercent:-60, xPercent:50, rotation:-30, opacity:0,},'a')
  .to('.sc-title .char19',{duration:1, yPercent:20, xPercent:-40, rotation:-5, scale:1.2},'a')
  .to('.sc-title .char20',{duration:1, yPercent:90, xPercent:0, rotation:0, opacity:0},'a')
  .to('.sc-title .title-bg',{
    background:'none',
    'z-index':10,
  })

  .to('.sc-title .title-area',{
    opacity:1,
    visibility:'visible',
    duration:1,
  })

  const introTextMotion = gsap.from('.sc-title .title-wrap .rolling',{
    paused:true,
    duration:2,
    yPercent:-100,
    stagger:{
        amount:1,
        from:'random'
    }
  })



/** intro stagger */
gsap
 .from('.sc-intro .intro-txt .wrap .line',{

    yPercent:100,
    stagger:{
        amount:0.3,
        stagger:0.1,
        opacity:0,
    },
    scrollTrigger:{
        trigger:'.sc-intro',
        start:'0% 70%',
        end:'+-900',
        scrub:1,
    }

   },)
  
   gsap.from('.intro-contents .intro-info .wrap .line',{
    yPercent:100,
    stagger:{
        amount:0.5,
        from:'random'
    },
    scrollTrigger:{
        trigger:'.intro-contents',
        start:'10% 100%',
        end:'+-500',
        scrub:1,
    }
   })

   gsap.from('.intro-contents .link-inner .line',{
    yPercent:100,
    scrollTrigger:{
        trigger:'.intro-contents',
        start:'30% 60%',
        end:'100% 100%',
        scrub:1,
    }
   })
   gsap.from('.intro-inner .intro-list .intro-item span',{
    yPercent:100,
    scrollTrigger:{
        trigger:'.intro-contents',
        start:'30% 60%',
        end:'70% 70%',
        scrub:1,
    }
   })
   gsap.to('.sc-intro .intro-inner .intro-item .board',{
    width:'100%',
    stagger:0.1,
    scrollTrigger:{
        trigger:'.intro-contents',
        start:'50% 60%',
        end:'70% 70%',
        scrub:1,
    }
   })
   const Amotion = gsap.timeline({   
    scrollTrigger:{
    trigger:'.sc-intro',
    start:'50% 60%',
    end:'100% 60%',
    scrub:1,
        }
    })

    Amotion
   .to('.sc-intro .intro-font img',{
    duration:5,
    rotation:30,
   })
   .to('.sc-intro .intro-font img',{
    duration:5,
    rotation:-30,
   })

 /** 마우스 커서 */
   $(window).mousemove(function(e){
    xVal = e.clientX;
    yVal = e.clientY;

    gsap.to('.cursor',{
        x:xVal-25,
        y:yVal-25,
    })
   })

   /** a 배경 */
   const info = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-info .bg-wrapper',
        start:'0% 0%',
        end:'100% 100%',
        scrub:1,
    }
   })
   info
   .addLabel('a')
   .from('.sc-info .char1',{duration:6, x:2300,y:-1000, opacity:0},'a')
   .from('.sc-info .char2',{duration:6, x:-2000,y:-1000,opacity:0},'a')
   .from('.sc-info .char3',{duration:6, x:-2000,y:1000,opacity:0},'a')
   .addLabel('b')
   .to('.sc-info .char1',{delay:3,duration:1,x:700,y:-1000,opacity:0},'b')
   .to('.sc-info .char2',{delay:3,duration:1,x:-700,y:1000,opacity:0},'b')
   .to('.sc-info .char3',{delay:3,duration:1,x:-700,y:1000,opacity:0},'b')

//  글자 움직임 

const headTxt = new SplitType('.sc-random .random-contents .word', { types: 'words, chars', });

const randomStart = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-random',
        start:'0% 50%',
        end:'50% 40%',
        scrub:1,
    },
})
randomStart
.from(headTxt.chars,{
    yPercent:100,
    stagger:{
        amount:1,
        from:'random',
        opacity:0,
    },
   })

//    마우스 호버 이벤트

   $('.sc-font .font-contents .font-list .font-item').hover(function(){
    text = $(this).text();
    $('.sc-font .font-box .font-prev span').text(text);
    $(this).addClass('on').siblings().removeClass('on');
   })

// 폰트 리스트

    $('.sc-font .font-wrap .font-current .current').click(function(){
        $('.sc-font .btn-font').toggleClass('open');
    
    })
  
    $('.sc-font .font-list button').click(function(){
        fontName = $(this).text();
        fontWeight = $(this).data('weight');
        $('.sc-font .btn-font').removeClass('open');
        $('.sc-font  .font-current .current').text(fontName)
        $('.sc-font .font-box').css('font-weight',fontWeight)
    })


    // 폰트 range

    let i = document.querySelector('#try-size');

    i.addEventListener('input',function(){
        console.log(i.value);
        $('.sc-try .try-txt .try-sphin').css('font-size',i.value+'px')
        $('.val1').text(i.value+'px');
    },false);

    let e = document.querySelector('#try-weight');

    e.addEventListener('input',function(){
        console.log(e.value);
        $('.sc-try .try-txt .try-sphin').css('font-weight',e.value)
        $('.val2').text(e.value);
    },false);

    let a = document.querySelector('#try-space');

    a.addEventListener('input',function(){
        console.log(a.value);
        $('.sc-try .try-txt .try-sphin').css('letter-spacing',a.value+'px')
        $('.val3').text(a.value+'%');
    },false);

    let b = document.querySelector('#try-height');

    b.addEventListener('input',function(){
        console.log(b.value);
        $('.sc-try .try-txt .try-sphin').css('line-height',b.value+'px')
        $('.val4').text(b.value+'pt');
    },false);

    // openType 기능

    gsap.from('.sc-glyph .title-wrap .board',{
        xPercent:-100,
        scrollTrigger:{
            trigger:'.sc-glyph',
            start:'-30% 50%',
            end:'+=90',
            scrub:1,
            invalidateOnRefresh: true,
        },
            stagger:{
                amount:0.1,
                stagger:0.3,
                opacity:0,
            },
    })

    gsap.to('.sc-glyph .title-wrap .title',{
        yPercent:130,
        scrollTrigger:{
            trigger:'.sc-glyph',
            start:'-60% 50%',
            end:'40% 60%',
            scrub:1,
            invalidateOnRefresh: true,

        },
            stagger:{
                amount:0.6,
                stagger:0.3,
                opacity:0,
            },
    })
    gsap.to('.sc-glyph .glyph-list .glyph-item ' ,{
    yPercent:100,
    scrollTrigger:{
        trigger:'.sc-glyph',
        start:'-50% 50%',
        end:'50% 70%',
        scrub:1,
        invalidateOnRefresh: true,
    },
        stagger:{
            amount:0.6,
            stagger:1,
            opacity:0,
        },
    })

// sc-ad 부분
    const adMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-ad',
            start:'0% 50%',
            end:'100% 50%',
            scrub:1,
        },
    })

    adMotion
    .to('.sc-ad .ad-wrapper a' ,{
        opacity:1,
        yPercent:100,
            stagger:{
                amount:0.6,
                stagger:1,
                opacity:0,
            },
        })
        .to('.sc-ad .ad-wrapper a',{
            opacity:0,
            yPercent:-100,
            stagger:{
                duration:3,
                amount:1,
                stagger:1,
                opacity:0,
            },
        })

        // footer

        gsap.to('.footer .ft-glyph img' ,{
            scale:8,
            scrollTrigger:{
                trigger:'.footer',
                start:'0% 50%',
                end:'50% 70%',
                scrub:1,
                invalidateOnRefresh: true,
            },

            })
        

})

