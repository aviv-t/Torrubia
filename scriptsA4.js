/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
<script>
        let lineCounter = 1;

        function addPayrollEntry() {
            const payrollList = document.getElementById('payroll-list');

            const payrollEntry = document.createElement('div');
            payrollEntry.classList.add('payroll-entry');
            payrollEntry.innerHTML = `
                <input type="text" value="Line ${lineCounter}" readonly>
                <input type="text" placeholder="Employee Name">
                <input type="number" placeholder="Days Worked" min="0">
                <input type="number" placeholder="Daily Rate" min="0">
                <input type="number" placeholder="Gross Pay" class="hidden" readonly>
                <input type="number" placeholder="Deduction" min="0">
                <input type="number" placeholder="Net Pay" class="hidden" readonly>
                <button style="background-color: black; border-radius: 7%;" onclick="createPayrollEntry(this)">Create</button>
            `;

            payrollList.appendChild(payrollEntry);
            lineCounter++;
        }

        function createPayrollEntry(button) {
    const entry = button.parentElement;
    const daysWorked = parseFloat(entry.children[2].value) || 0;
    const dailyRate = parseFloat(entry.children[3].value) || 0;
    const deduction = parseFloat(entry.children[5].value) || 0;

    if (daysWorked > 0 && dailyRate > 0) {
        const grossPay = daysWorked * dailyRate;
        const netPay = grossPay - deduction;

       
        entry.children[4].classList.remove('hidden'); 
        entry.children[6].classList.remove('hidden'); 
        entry.children[4].value = grossPay.toFixed(2);
        entry.children[6].value = netPay.toFixed(2);

        
        entry.children[1].disabled = true;
        entry.children[2].disabled = true;
        entry.children[3].disabled = true;
        entry.children[5].disabled = true;
        
        
        button.style.display = 'none';
    }
}


        function updateLineNumbers() {
            const entries = document.querySelectorAll('.payroll-entry');
            entries.forEach((entry, index) => {
                entry.querySelector('input[type="text"]').value = `Line ${index + 1}`;
            });
            lineCounter = entries.length + 1;
        }

        function deleteSpecificLine() {
            const lineNumber = document.getElementById('delete-line-number').value;
            const payrollList = document.getElementById('payroll-list');
            const entry = payrollList.children[lineNumber - 1];

            if (entry) {
                entry.remove();
                updateLineNumbers();
            } else {
                alert('Line number does not exist!');
            }
        }
        function dlgConfirm(message) {
    return new Promise((resolve) => {
        // Create a custom dialog box
        const dialog = document.createElement('div');
        dialog.style.position = 'fixed';
        dialog.style.top = '0';
        dialog.style.left = '0';
        dialog.style.width = '100vw';
        dialog.style.height = '100vh';
        dialog.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        dialog.style.display = 'flex';
        dialog.style.justifyContent = 'center';
        dialog.style.alignItems = 'center';
        dialog.style.zIndex = '9999';

        const box = document.createElement('div');
        box.style.backgroundColor = 'white';
        box.style.padding = '20px';
        box.style.borderRadius = '8px';
        box.style.textAlign = 'center';
        box.innerHTML = `
            <p>${message}</p>
            <button id="confirm-Yes" style="padding: 10px 20px; margin: 5px;">Yes</button>
            <button id="confirm-cancel" style="padding: 10px 20px; margin: 5px;">Cancel</button>
        `;
        dialog.appendChild(box);
        document.body.appendChild(dialog);

        document.getElementById('confirm-Yes').addEventListener('click', () => {
            document.body.removeChild(dialog);
            resolve(true);
        });

        document.getElementById('confirm-cancel').addEventListener('click', () => {
            document.body.removeChild(dialog);
            resolve(false);
        });
    });
}

        function clearAllEntries() {
    dlgConfirm("Are you sure?")
        .then((result1) => {
            if (result1) {
                dlgConfirm("Are you really sure?")
                    .then((result2) => {
                        if (result2) {
                            document.getElementById('payroll-list').innerHTML = '';
                            lineCounter = 1;
                        }
                    });
            }
        });
}
    </script>