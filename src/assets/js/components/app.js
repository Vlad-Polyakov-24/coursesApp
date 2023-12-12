const clientCounter = () => {
    const counters = document.querySelectorAll('[data-client-counter]');
    const minValue = 1;

    counters.forEach(counter => {
        const icons = counter.querySelector('[data-client-counter-icons]');
        const buttons = counter.querySelectorAll('[data-client-counter-btn]');
        const amountLabels = counter.querySelectorAll('[data-client-counter-amount]');
        const priceLabels = counter.querySelectorAll('[data-client-counter-price]');
        const priceForOne = counter.dataset.clientCounter;
        const data = {
            amount: 1,
            price() {
                return this.amount * priceForOne
            },
        }

        const updateUI = (amountLabels, priceLabels, icons) => {
            amountLabels.forEach(label => {
                if (label.dataset.clientCounterAmount === 'span') label.innerText = data.amount;
                if (label.dataset.clientCounterAmount === 'input') label.value = data.amount;
            });

            priceLabels.forEach(label => {
                if (label.dataset.clientCounterPrice === 'span') label.innerText = data.price();
                if (label.dataset.clientCounterPrice === 'input') label.value = data.price();
            });

            icons.querySelectorAll('.clients-count__icon').forEach((icon, i) => {
                i < data.amount ? icon.classList.add('active') : icon.classList.remove('active');
            });
        }

        const decrease = () => data.amount = data.amount <= 1 ? minValue : data.amount - 1;

        const increase = (icons) => {
            const maxValue = icons.children.length;
            data.amount = data.amount >= 10 ? maxValue : data.amount + 1;
        }

        updateUI(amountLabels, priceLabels, icons);

        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                if (btn.dataset.clientCounterBtn === 'decrease') {
                    decrease();
                    updateUI(amountLabels, priceLabels, icons);
                }

                if (btn.dataset.clientCounterBtn === 'increase') {
                    increase(icons);
                    updateUI(amountLabels, priceLabels, icons);
                }
            });
        });

        icons.querySelectorAll('.clients-count__icon').forEach((icon, i) => {
            icon.addEventListener('click', () => {
                data.amount = i + 1;
                updateUI(amountLabels, priceLabels, icons);
            });
        });
    });
}

clientCounter();
