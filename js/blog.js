"use strict";
export function PostPage(title, body, author) 
{
    return  `<div class="post-preview">
                <a href="#">
                    <h4 class="post-title titleFont">
                        `+ title +`
                    </h4>
                    <h6 class="post-subtitle subTitleFont">
                        `+ body +`
                    </h6>
                </a>
                <p class="post-meta"><i class="fa fa-clock-o"></i> 10 days ago by <a href="#">`+ author +`</a></p>
            </div>`
}