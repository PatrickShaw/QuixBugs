/*
Driver to test topological ordering*/
import {Node} from './node';
import {topological_ordering} from './topological_ordering';
export function main() {
    var eat, egg, eight, eleven, five, four, griddle, milk, mix, nine, oil, one, pour, seven, syrup, ten, three, turn, two, zero;
    five = new Node(5);
    seven = new Node(7);
    three = new Node(3);
    eleven = new Node(11);
    eight = new Node(8);
    two = new Node(2);
    nine = new Node(9);
    ten = new Node(10);
    five.outgoing_nodes = [eleven];
    seven.outgoing_nodes = [eleven, eight];
    three.outgoing_nodes = [eight, ten];
    eleven.incoming_nodes = [five, seven];
    eleven.outgoing_nodes = [two, nine, ten];
    eight.incoming_nodes = [seven, three];
    eight.outgoing_nodes = [nine];
    two.incoming_nodes = [eleven];
    nine.incoming_nodes = [eleven, eight];
    ten.incoming_nodes = [eleven, three];
    try {
        function () {
    var _pj_a = [], _pj_b = topological_ordering([five, seven, three, eleven, eight, two, nine, ten]);
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        _pj_a.push(console.log(x.value));
    }
    return _pj_a;
}
.call(this);
    } catch(e) {
        console.log(e);
    }
    console.log();
    five = new Node(5);
    zero = new Node(0);
    four = new Node(4);
    one = new Node(1);
    two = new Node(2);
    three = new Node(3);
    five.outgoing_nodes = [two, zero];
    four.outgoing_nodes = [zero, one];
    two.incoming_nodes = [five];
    two.outgoing_nodes = [three];
    zero.incoming_nodes = [five, four];
    one.incoming_nodes = [four, three];
    three.incoming_nodes = [two];
    three.outgoing_nodes = [one];
    try {
        function () {
    var _pj_a = [], _pj_b = topological_ordering([zero, one, two, three, four, five]);
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        _pj_a.push(console.log(x.value));
    }
    return _pj_a;
}
.call(this);
    } catch(e) {
        console.log(e);
    }
    console.log();
    milk = new Node("3/4 cup milk");
    egg = new Node("1 egg");
    oil = new Node("1 Tbl oil");
    mix = new Node("1 cup mix");
    syrup = new Node("heat syrup");
    griddle = new Node("heat griddle");
    pour = new Node("pour 1/4 cup");
    turn = new Node("turn when bubbly");
    eat = new Node("eat");
    milk.outgoing_nodes = [mix];
    egg.outgoing_nodes = [mix];
    oil.outgoing_nodes = [mix];
    mix.incoming_nodes = [milk, egg, oil];
    mix.outgoing_nodes = [syrup, pour];
    griddle.outgoing_nodes = [pour];
    pour.incoming_nodes = [mix, griddle];
    pour.outgoing_nodes = [turn];
    turn.incoming_nodes = [pour];
    turn.outgoing_nodes = [eat];
    syrup.incoming_nodes = [mix];
    syrup.outgoing_nodes = [eat];
    eat.incoming_nodes = [syrup, turn];
    try {
        function () {
    var _pj_a = [], _pj_b = topological_ordering([milk, egg, oil, mix, syrup, griddle, pour, turn, eat]);
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        _pj_a.push(console.log(x.value));
    }
    return _pj_a;
}
.call(this);
    } catch(e) {
        console.log(e);
    }
    console.log();
}

    main();

