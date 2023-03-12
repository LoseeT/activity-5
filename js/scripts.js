(function(){
    var data = [
        {
            name: 'Stylelint',
            description: 'Stylelint allows CSS, SCSS, and Less to have different languages enabled in the program.',
            author: 'stylelint',
            url: 'https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint',
            downloads: 1218731,
            stars: 16,
            price: 0.00,
            selector: 'p1'
        },
        {
            name: 'CSS peek',
            description: 'CSS Peek allows HTML to show the creator what words are being affected by CSS.',
            author: 'Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 4043127,
            stars: 83,
            price: 0.00,
            selectors: 'p2'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }
    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);

}())