import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatedPrice';


export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct } = useCart();
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Items</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidades</Table.Th>
                    <Table.Th>Total</Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <img src={product.url} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>{product.quatity}</Table.Td>
                            <Table.Td>{formatPrice (product.quatity * product.price)}</Table.Td>
                                                       
                        </Table.Tr>
                    ))
                ) : <div>
                    carrinho Vazio</div>
                    }</Table.Body>
        </Table.Root>
    )
}