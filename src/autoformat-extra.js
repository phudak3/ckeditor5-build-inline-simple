const Emojis = [
    { from: ':)', to: '🙂' },
    { from: ':-)', to: '🙂' },
    { from: ':]', to: '😌' },
    { from: ';)', to: '😉' },
    { from: ';-)', to: '😉' },
    { from: ':D', to: '😀' },
    { from: ':-D', to: '😀' },
    { from: ';P', to: '🤪' },
    { from: ';-P', to: '🤪' },
    { from: ':P', to: '😛' },
    { from: ':-P', to: '😛' },
    { from: '8-)', to: '😎' },
    { from: ':|', to: '😐' },
    { from: ':-|', to: '😐' },
    { from: ':(', to: '😔' },
    { from: ':-(', to: '😔' },
    { from: 'o_O', to: '🥴' },
    { from: 'o.O', to: '🥴' },
    { from: ':/', to: '😕' },
    { from: ':-/', to: '😕' },
    { from: ':O', to: '😮' },
    { from: ':-O', to: '😮' },
    { from: 'O_O', to: '😳' },
    { from: 'O.O', to: '😳' },
    { from: 'o_o', to: '😖' },
    { from: '#)', to: '🤑' },
    { from: '#-)', to: '🤑' },
    { from: '^.^', to: '🤓' },
    { from: '^_^', to: '🤓' },
    { from: '^^', to: '🤓' },
    { from: ':-x', to: '😘' },
    { from: ':*', to: '😘' },
    { from: ':-*', to: '😘' },
    { from: '#(', to: '😭' },
    { from: '#-(', to: '😭' },
    { from: 'm-)', to: '🤦‍' },
    { from: ':`(', to: '😢' },
    { from: ':`-(', to: '😢' },
];

function autoformatExtra() {
    return [
        ...Emojis,
        { from: ',,', to: '„' },

        // You can also define patterns using regular expressions.
        // Note: The pattern must end with `$` and all its fragments must be wrapped
        // with capturing groups.
        // The following rule replaces ` "foo"` with ` «foo»`.
        {
            from: /(^|\s)(")([^"]*)(")$/,
            to: [ null, '„', null, '“' ]
        },
        {
            from: /(\. )([a-z])$/,
            to: matches => [ null, matches[ 1 ].toUpperCase() ]
        }
    ]
}

export default autoformatExtra;
