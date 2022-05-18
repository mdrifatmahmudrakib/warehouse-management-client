import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">

                        <div class="card-body">
                            <h5 class="card-title">Difference between javascript and nodejs.</h5>
                            <p class="card-text">Javascript is a programming language that runs on browser engine. Every browser has engine that can run javascript. It is used to make web pages interact and usefull. On the other hand, node.js is a run time environment for javascript to run outside of the browser. It help javascript to run on server. With the help of it we can run javascript code on server side and run backend operation withi it. Node.js is not a programming language itself.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">

                        <div class="card-body">
                            <h5 class="card-title">Differences between SQL and NoSQL databases.</h5>
                            <p class="card-text">Where SQL databases are vertically scalable, NoSQL databases are horizontally scalable. SQL databases are table-based whereas NoSQL databases are key-value pairs/ document-based/ graph, or wide-column stores. SQL databases have fixed schema which is rigid while NoSQL databases have dynamic schema which is flexible.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">

                        <div class="card-body">
                            <h5 class="card-title">What is the purpose of jwt and how does it work?</h5>
                            <p class="card-text">JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;