
This is design I refer from behance. here is the link
https://www.behance.net/gallery/64208001/DESIGNERD-20


## how to make a component center (vertically and horizontally) ?

    In the "left_section", the "content" part is made center to "left_section".

    html =>
        <section id="left_section">
            <nav></nav>
            <div id="content">
                <h1>Hello,</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas dolore quaerat nam fugit repudiandae quisquam cupiditate aut fuga distinctio!</p>
                <a href="#">Read</a>
            </div>
        </section>
    
    -------------------------------------
    style  =>

        #left_section{
            position: relative;
        }

        #left_section #content{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }


    ---------------------------------------

## add underlying to text 

    way 1 => alrady we know

        html =>
            <a href="#" id="nav-active-item"> Home</a>

        css =>
            #nav-active-item{
                position: relative; 
            }

            #nav-active-item::after{
                position: absolute;
                content: "";
                width: 90%;
                height: 2px;
                background-color: rgba(0,0,0,0.3);
                left: 4%;
                bottom: -5px;
            }

    ----------------------------------------------

    way 2 => 20 - 22 min



-----------------------------------------------

## Add image to div container using css background-image property

    html =>
        <div id="right_bottom"></div>


    css =>
        #right_bottom{
            height: 50%;
            width: 100%;
            background-color: rgb(242, 239, 173);
            background-image: url(assets/images/orange-slices-12.png);
            background-size: cover;
            background-position: center;
        }


------------------------------------------------
