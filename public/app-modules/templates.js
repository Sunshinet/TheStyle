import 'jquery';

const templates = (function () {
    function getPage(pageName, data,a) {
        const url = `templates/${pageName}.handlebars`;
        return $.get(url, function (html) {
            const hbTemplate = Handlebars.compile(html.toString());
            $('#content').html(hbTemplate(data,a));
        });
    }

    return {
        getPage: getPage
    };
}());

export {
    templates
};

