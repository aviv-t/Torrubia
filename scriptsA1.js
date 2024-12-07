
<script>
        function convertToFahrenheit() {
            const celsius = parseFloat(document.getElementById('celsiusInput').value);
            if (isNaN(celsius)) {
                document.getElementById('resultOutput').value = 'Please enter a valid number.';
                return;
            }
            const fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById('resultOutput').value = `${celsius}°C is ${fahrenheit.toFixed(2)}°F.`;
        }

        function convertToCelsius() {
            const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
            if (isNaN(fahrenheit)) {
                document.getElementById('resultOutput').value = 'Please enter a valid number.';
                return;
            }
            const celsius = (fahrenheit - 32) * 5 / 9;
            document.getElementById('resultOutput').value = `${fahrenheit}°F is ${celsius.toFixed(2)}°C.`;
        }
    </script>