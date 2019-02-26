import { AbilityBuilder, Ability } from '@casl/ability'

//Init ability
export const ability =
    AbilityBuilder.define(can => {
        // can('load', 'all');
    });

//Update ability
export function defineAbilityFor(role) {
    const { rules, can, cannot } = AbilityBuilder.extract();

    switch (role) {
        case 'USER':
            can('read', 'Help Desk Task');
            break;
        case 'ADMIN':
            can('update', 'Help Desk Task');
            break;
        default :
            can('read', 'News');
            break;
    }

    return new Ability(rules);
}