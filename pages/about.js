import Link from "next/link"

import Layout from "../components/Layout"

export default function About() {
    return (
        <Layout>
            <div>
                <h1>About Us</h1>
            </div>
            <section>
                <h2>Since 1995</h2>
                <div>
                    <p>
                        Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    </p>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h3>Article Title</h3>
                    <p>Publisher Name 02/08/08</p>
                    <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    </p>
                    <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    </p>
                    <Link href='/'>
                        <a>Read More</a>
                    </Link>
                </div>
            </section>
            <section>
                <div>
                    <h3>Giving Back to the Community</h3>
                    <p>
                    Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt.
                    </p>
                </div>
            </section>
        </Layout>
    )
}