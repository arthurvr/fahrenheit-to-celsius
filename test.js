import test from 'ava';
import f from './';

test('should convert fahrenheit to celsius', t => {
	t.is(f(33.8).toFixed(2), '1.00');
	t.is(f(23), -5);
	t.is(f(59), 15);
	t.is(f(0).toFixed(2), '-17.78');

	t.end();
});

test('should throw when passing nonsense input', t => {
	['foobar', function () {}, [], {}].forEach(input => {
		t.throws(() => {
			f(input);
		});
	});

	t.end();
});
