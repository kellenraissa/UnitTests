import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe('Async component', () => {
    test('renders posts is request succeeds', async () => {
        //jest é global e fncria uma função mockada
        window.fetch = jest.fn()
        //agora posso inventar uma função que permite definir uma valor para o qual essa função fetch deve resolver quando for chamada
        window.fetch.mockResolveValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        })
        render(<Async/>)
        //find de findAllByRole serve para coisas assincornas, pois retorna uma promise
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)
    })
})