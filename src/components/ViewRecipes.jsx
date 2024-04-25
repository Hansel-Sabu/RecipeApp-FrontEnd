import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewRecipes = () => {
    const [data,changeData]=useState(
        [
            {"RecipeTitle":"Crispy Rice Salad","ImgLink":"https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Crispy-Rice-Salad-4.jpg"},
            {"RecipeTitle":"Gochujang Sauce","ImgLink":"https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Gochujang-Sauce-1.jpg"},
            {"RecipeTitle":"Fryer Salmon","ImgLink":"https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Air-Fryer-Salmon-2.jpg"},
            {"RecipeTitle":"Baked Cookies","ImgLink":"https://pinchofyum.com/wp-content/uploads/Two-Giant-Cookies-2-1200x1200.jpg"},
            {"RecipeTitle":"Marry ME Chicken","ImgLink":"https://pinchofyum.com/wp-content/uploads/Marry-Me-Chicken-6-1200x1200.jpg"},
            {"RecipeTitle":"Tofu","ImgLink":"https://pinchofyum.com/wp-content/uploads/Crispy-Air-Fryer-Tofu-1200x1200.jpg"},
            {"RecipeTitle":"Tortellini","ImgLink":"https://pinchofyum.com/wp-content/uploads/Baked-Tortellini-1-scaled-e1708701729683-1200x1200.jpg"},
            {"RecipeTitle":"Butter Cauliflower","ImgLink":"https://pinchofyum.com/wp-content/uploads/Butter-Cauliflower-and-Chickpeas-1-1200x1200.jpg"},
            {"RecipeTitle":"Chicken Bowls","ImgLink":"https://pinchofyum.com/wp-content/uploads/Chicken-Bowls-1-3-1200x1200.jpg"},
            {"RecipeTitle":"Air Fryer Chicken","ImgLink":"https://pinchofyum.com/wp-content/uploads/Air-Fryer-Chicken-9-1200x1200.jpg"},
            {"RecipeTitle":"White Chicken Chili","ImgLink":"https://pinchofyum.com/wp-content/uploads/White-Chicken-Chili-7-1200x1200.jpg"},
            {"RecipeTitle":"Mushroom Sandwich","ImgLink":"https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-800x800.jpg"},
            {"RecipeTitle":"Mushroom Gnocchi","ImgLink":"https://pinchofyum.com/wp-content/uploads/Mushroom-Gnocchi-12-1200x1200.jpg"},
            {"RecipeTitle":"Apple Sauce","ImgLink":"https://pinchofyum.com/wp-content/uploads/Applesauce-1-4-1200x1200.jpg"},
            {"RecipeTitle":"Tomato Soup","ImgLink":"https://pinchofyum.com/wp-content/uploads/Tomato-Soup-3-1-1200x1200.jpg"},
            
        ]
    )
    return (
        <div>
            <Navbar />
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <br />


                                {data.map(
                                    (value, index) => {
                                        return <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.ImgLink} height="300px" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <p class="fs-4">{value.RecipeTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRecipes