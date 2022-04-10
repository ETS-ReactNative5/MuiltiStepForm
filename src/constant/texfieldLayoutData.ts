const contactData = {
    heading:
        " What is the email and phone number that we can reach you the best? ",
    textData: [
        {
            label: "Email",
            name: "email",
            autoFocus: false,
            rules: {
                required: {
                    value: true,
                    message: "Please Provide E-Mail",
                },
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please Provide Valid Email",
                },
            },
        },
        {
            label: "PhoneNo",
            name: " PhoneNo",
            autoFocus: false,
            rules: {
                required: {
                    value: true,
                    message: "First name required",
                },
            },
        },
    ],
    button: { label: "Next", link: "/", type: "submit" },
};
const personalData = {
    heading: " Could you tell us a bit more about yourself ",
    textData: [
        {
            label: "First name*",
            name: "firstName",
            autoFocus: false,
            rules: {
                required: {
                    value: true,
                    message: "First name required",
                },
            },
        },
        {
            label: "Last name*",
            name: "lastName",
            autoFocus: false,
            rules: {
                required: {
                    value: true,
                    message: "First name required",
                },
            },
        },
    ],
    button: { label: "Next", link: "/", type: "submit" },
};
const professionData = {
    heading: "Thanks!😊 Just a few more details and we are done",
    textData: [
        {
            label: "Company name*",
            name: "companyName",
            autoFocus: false,
            rules: {
                required: {
                    value: true,
                    message: "First name required",
                },
            },
        },
        {
            label: "Job Title*",
            name: "jobTitle",
            autoFocus: false,
            rules: {
                required: {
                    value: true,
                    message: "First name required",
                },
            },
        },
    ],
    button: { label: "Submit", link: "/", type: "submit" },
};

export { contactData, personalData, professionData };
