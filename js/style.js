

const filterContainre=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainre.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;
      
    
      for(let i=0; i<totalFilterBtn; i++){
       filterBtns[i].addEventListener("click", function(){
        filterContainre.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute("data-filter");
        for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else{
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
        }
         if(filterValue ==="all"){
            portfolioItems[k].classList.remove("hide");
            portfolioItems[k].classList.add("show");
         }
        }

       })
      }

    //   portfolio lightbox
    const lightbox=document.querySelector(".lightbox"),
            lightboxImg=lightbox.querySelector(".lightbox-img"),
            lightboxText=lightbox.querySelector(".caption-tex"),
            lightboxCounter=lightbox.querySelector(".caption-counter");
            let itemIndex=0;

            for(let i=0; i<totalPortfolioItem; i++){
                portfolioItems[i].addEventListener("click", function(){
                    itemIndex=i;
                    changeItem();
                })
            }
                function toggleLightbox(){
                    lightbox.classList.toggle("open");
                }

            function changeItem(){
                imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("Src");
                lightboxImg.src=imgSrc;
            }

            //     })
                
            // }
            // function changeItem(){
            //     imgSrc=portfolioItems[itemIndex].querySelector("portfolio-img img").getAttribute("src");
            //     console.log(imgSrc);
            
            // }