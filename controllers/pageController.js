const getIndexPage = (req, res) => {
    res.render("index", {
        link : "index"
    });
}

const getAboutPage = (req, res) => {
    res.render("about", {
        link : "about"
    });
}

const getBlogPage = (req, res) => {
    res.render("blog", {
        link : "blog"
    });
}

const getContactPage = (req, res) => {
    res.render("contact", {
        link : "contact"
    });
}

// const getGalleryPage = (req, res) => {
//     res.render("gallery", {
//         link : "blog"
//     });
// }

const getProjectsPage = (req, res) => {
    res.render("projects",  {
        link : "projects"
    });
}

const getServicesPage = (req, res) => {
    res.render("services",  {
        link : "services"
    });
}

export { getIndexPage, getAboutPage,getBlogPage,getContactPage, getProjectsPage,getServicesPage };