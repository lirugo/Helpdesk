import { AbilityBuilder, Ability } from '@casl/ability'

// инициализируем ability, но роли еще не известны
export const ability =
    AbilityBuilder.define(can => {
        // can('load', 'all');
    });

// функция для создания правил, воспользуемся когда нам потребуется
export function defineAbilityFor(role) {
    const { rules, can, cannot } = AbilityBuilder.extract();

    switch (role) {
        case 'USER':
            can('read', 'Help Desk Task');
            break;
        case 'ADMIN':
            can('update', 'Help Desk Task');
            break;
    }

    return new Ability(rules);
}