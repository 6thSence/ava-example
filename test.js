import test from 'ava';
import sum from 'helper.js';

test('3 + 5 = 8', t => {
	var result = sum(3, 5);

	t.is(8, result);
});

test('0 + 0 = 0', t => {
	var result = sum(0, 0);

	t.is(0, result);
});

test('(-8) + (-2) = -10', t => {
	var result = sum(-8, -2);

	t.is(-10, result);
});