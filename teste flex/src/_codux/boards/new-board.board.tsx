import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <li>Item<li>Item</li>
        </li>
    </div>,
    isSnippet: true,
});
