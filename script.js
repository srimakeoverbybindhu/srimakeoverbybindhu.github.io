/* =====================================================
   SRI MAKEOVER BY BINDHU
   BOOKING + PRICE ENQUIRY + MOBILE NAVIGATION
===================================================== */


/* =====================================================
   OPEN BOOKING POPUP
===================================================== */

function openBooking() {

    const bookingPopup =
        document.getElementById("bookingOverlay");

    const pricePopup =
        document.getElementById("priceOverlay");


    if (!bookingPopup) {
        return;
    }


    /* Close price popup */

    if (pricePopup) {

        pricePopup.classList.remove("active");

        pricePopup.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    bookingPopup.classList.add("active");

    bookingPopup.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";


    /* Focus name field */

    setTimeout(function () {

        const nameInput =
            document.getElementById("customerName");

        if (nameInput) {
            nameInput.focus();
        }

    }, 100);
}



/* =====================================================
   CLOSE BOOKING POPUP
===================================================== */

function closeBooking() {

    const bookingPopup =
        document.getElementById("bookingOverlay");


    if (!bookingPopup) {
        return;
    }


    bookingPopup.classList.remove("active");

    bookingPopup.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}



/* =====================================================
   OPEN PRICE POPUP
===================================================== */

function openPrice() {

    const pricePopup =
        document.getElementById("priceOverlay");

    const bookingPopup =
        document.getElementById("bookingOverlay");


    if (!pricePopup) {
        return;
    }


    /* Close booking popup */

    if (bookingPopup) {

        bookingPopup.classList.remove("active");

        bookingPopup.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    pricePopup.classList.add("active");

    pricePopup.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}



/* =====================================================
   CLOSE PRICE POPUP
===================================================== */

function closePrice() {

    const pricePopup =
        document.getElementById("priceOverlay");


    if (!pricePopup) {
        return;
    }


    pricePopup.classList.remove("active");

    pricePopup.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}



/* =====================================================
   PAGE LOADED
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           GET ELEMENTS
        ================================================= */

        const bookingPopup =
            document.getElementById("bookingOverlay");

        const pricePopup =
            document.getElementById("priceOverlay");

        const bookingForm =
            document.getElementById("bookingForm");

        const appointmentDate =
            document.getElementById("appointmentDate");

        const menuToggle =
            document.getElementById("menuToggle");

        const navMenu =
            document.getElementById("navMenu");



        /* =================================================
           MOBILE NAVIGATION
        ================================================= */

        if (menuToggle && navMenu) {


            /* Open / close menu */

            menuToggle.addEventListener(
                "click",
                function () {

                    const isOpen =
                        navMenu.classList.toggle(
                            "active"
                        );


                    menuToggle.classList.toggle(
                        "active",
                        isOpen
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        isOpen
                    );

                }
            );


            /* Close menu after clicking a link */

            const navLinks =
                navMenu.querySelectorAll("a");


            navLinks.forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navMenu.classList.remove(
                            "active"
                        );


                        menuToggle.classList.remove(
                            "active"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });


            /* Close menu when clicking outside */

            document.addEventListener(
                "click",
                function (event) {

                    if (
                        !navMenu.contains(event.target) &&
                        !menuToggle.contains(event.target)
                    ) {

                        navMenu.classList.remove(
                            "active"
                        );


                        menuToggle.classList.remove(
                            "active"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }



        /* =================================================
           PREVENT PAST DATES
        ================================================= */

        if (appointmentDate) {

            const today =
                new Date()
                    .toISOString()
                    .split("T")[0];

            appointmentDate.min = today;

        }



        /* =================================================
           CLICK OUTSIDE BOOKING POPUP
        ================================================= */

        if (bookingPopup) {

            bookingPopup.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        bookingPopup
                    ) {

                        closeBooking();

                    }

                }
            );

        }



        /* =================================================
           CLICK OUTSIDE PRICE POPUP
        ================================================= */

        if (pricePopup) {

            pricePopup.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        pricePopup
                    ) {

                        closePrice();

                    }

                }
            );

        }



        /* =================================================
           ESCAPE KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {


                    /* Close booking */

                    if (
                        bookingPopup &&
                        bookingPopup.classList.contains(
                            "active"
                        )
                    ) {

                        closeBooking();

                    }


                    /* Close price */

                    if (
                        pricePopup &&
                        pricePopup.classList.contains(
                            "active"
                        )
                    ) {

                        closePrice();

                    }


                    /* Close mobile menu */

                    if (
                        navMenu &&
                        navMenu.classList.contains(
                            "active"
                        )
                    ) {

                        navMenu.classList.remove(
                            "active"
                        );


                        if (menuToggle) {

                            menuToggle.classList.remove(
                                "active"
                            );


                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }

                }

            }
        );



        /* =================================================
           BOOKING FORM
        ================================================= */

        if (bookingForm) {

            bookingForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();



                    /* =====================================
                       GET CUSTOMER DETAILS
                    ===================================== */

                    const name =
                        document
                            .getElementById(
                                "customerName"
                            )
                            .value
                            .trim();


                    const phone =
                        document
                            .getElementById(
                                "customerPhone"
                            )
                            .value
                            .trim();


                    const date =
                        document
                            .getElementById(
                                "appointmentDate"
                            )
                            .value;


                    const time =
                        document
                            .getElementById(
                                "appointmentTime"
                            )
                            .value;


                    const message =
                        document
                            .getElementById(
                                "message"
                            )
                            .value
                            .trim();



                    /* =====================================
                       GET MULTIPLE SERVICES
                    ===================================== */

                    const selectedServices =
                        Array.from(
                            document.querySelectorAll(
                                'input[name="bookingService"]:checked'
                            )
                        ).map(
                            function (checkbox) {

                                return checkbox.value;

                            }
                        );



                    /* =====================================
                       CHECK SERVICES
                    ===================================== */

                    if (
                        selectedServices.length === 0
                    ) {

                        alert(
                            "Please select at least one service."
                        );

                        return;

                    }



                    /* =====================================
                       PHONE VALIDATION
                    ===================================== */

                    if (
                        !/^[0-9]{10}$/.test(phone)
                    ) {

                        alert(
                            "Please enter a valid 10-digit phone number."
                        );

                        return;

                    }



                    /* =====================================
                       FORMAT DATE
                    ===================================== */

                    let formattedDate = "";

                    if (date) {

                        formattedDate =
                            date
                                .split("-")
                                .reverse()
                                .join("/");

                    }



                    /* =====================================
                       SPECIAL REQUIREMENTS
                    ===================================== */

                    const specialRequirements =
                        message !== ""
                            ? message
                            : "Nothing";



                    /* =====================================
                       SERVICES FOR WHATSAPP
                    ===================================== */

                    const servicesText =
                        selectedServices
                            .map(
                                function (service) {

                                    return "- " + service;

                                }
                            )
                            .join("\n");



                    /* =====================================
                       CREATE BOOKING MESSAGE
                    ===================================== */

                    const whatsappMessage =
`Hello Sri Makeover by Bindhu

I would like to book an appointment.

Name: ${name}
Phone: ${phone}

Services:
${servicesText}

Preferred Date: ${formattedDate}
Preferred Time: ${time}
Special Requirements: ${specialRequirements}

Thank you!`;



                    /* =====================================
                       WHATSAPP NUMBER
                    ===================================== */

                    const whatsappNumber =
                        "918008202255";



                    /* =====================================
                       WHATSAPP URL
                    ===================================== */

                    const whatsappURL =
                        "https://wa.me/" +
                        whatsappNumber +
                        "?text=" +
                        encodeURIComponent(
                            whatsappMessage
                        );



                    /* =====================================
                       OPEN WHATSAPP
                    ===================================== */

                    window.open(
                        whatsappURL,
                        "_blank"
                    );

                }
            );

        }

    }
);



/* =====================================================
   ASK PRICE FOR MULTIPLE SERVICES
===================================================== */

function askPriceOnWhatsApp() {


    /* =================================================
       GET SELECTED SERVICES
    ================================================= */

    const selectedServices =
        Array.from(
            document.querySelectorAll(
                'input[name="priceService"]:checked'
            )
        ).map(
            function (checkbox) {

                return checkbox.value;

            }
        );



    /* =================================================
       CHECK SERVICES
    ================================================= */

    if (
        selectedServices.length === 0
    ) {

        alert(
            "Please select at least one service."
        );

        return;

    }



    /* =================================================
       SERVICES FOR WHATSAPP
    ================================================= */

    const servicesText =
        selectedServices
            .map(
                function (service) {

                    return "- " + service;

                }
            )
            .join("\n");



    /* =================================================
       CREATE PRICE MESSAGE
    ================================================= */

    const whatsappMessage =
`Hello Sri Makeover by Bindhu

I would like to know the price for:

Services:
${servicesText}

Please share the exact price and available packages.

Thank you!`;



    /* =================================================
       WHATSAPP NUMBER
    ================================================= */

    const whatsappNumber =
        "918008202255";



    /* =================================================
       CREATE WHATSAPP URL
    ================================================= */

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(
            whatsappMessage
        );



    /* =================================================
       OPEN WHATSAPP
    ================================================= */

    window.open(
        whatsappURL,
        "_blank"
    );

}