function tseamAccount(arr) {

    let moveList = arr.join(' ').split(' ');
    let list = moveList.splice(0, 3);
    let listUpdate = list.slice(0);

    let commands = '';

    for (let i = 0; i < moveList.length; i++) {
        let movement = moveList[i];

        for (let l = 0; l < list.length; l++) {
            commands = list[l];
        }

        switch (movement) {
            case 'Install':
                if (moveList[i + 1] == commands) {
                    listUpdate.unshift(moveList[i + 1]);
                } break;

            case 'Uninstall':
                if (moveList[i + 2] === commands) {
                    let uninstall = listUpdate.splice(commands);
                    listUpdate = uninstall.slice();
                }    
        }
    }
    console.log(moveList);
    console.log(list);
    console.log(listUpdate);

}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])