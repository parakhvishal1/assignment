const test1 = {
    code: "BMSSG",
    header: {
        banners: [
            {
                name: "banner1",
                imageUrl:
                    "https://cdn.localhost.dev/dev/202006/9ada1f665d99-1592130713518.png",
            },
            {
                imageUrl:
                    "http://cdn.localhost.dev/dev/202007/dc19bd6ba566-1594964851886.jpg",
            }
        ],
    },
    name: "BookMyShow",
    cardImageUrl: "cdn.localhost.dev/71/e1/71e13de783f5cef09c8128e186fac0a8.png",
    whiteLabel: {
        header: { primary: "#5c2a90", darker: "#171717", lighter: "#f1e4f7" },
        logo: "https://cdn.localhost.dev/dev/202007/e90d1e06b1ce-1594707971188.png"
    },
    emailTemplateSubject: "Dev BMSSG - Tickets Purchased Testing New Template"
}

const arrayOfUrls = [];

// Modify… // source is a nested javascript object
// search is the string to find in the object
// handler is the function to process the found value

// Input your functions if any


function searchAndProcess(source, search, handler) {

    for (var key in source) { // works for objects and arrays
        var item = source[key];
        //console.log(item);
        if (typeof item === "object")
            item = console.log(searchAndProcess(item, search, handler));
        else if (item.includes(search)) {

            source[key] = handler(item, search);
            arrayOfUrls.push(source[key]);
        }
    }
    return source;
}

function handler(item, search) {
    return item.replace(search, "cdn.bookmyshow.com");
}

console.log(JSON.stringify(searchAndProcess(test1, "cdn.localhost.dev", handler)));
console.log(arrayOfUrls);
