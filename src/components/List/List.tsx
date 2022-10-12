import { Button } from "@mui/material"
import { Teacher } from "../../@types/teacher"
import { Description, EmptyList, Informations, ItemList, ListStyled, Name, Photo, Price } from "./List.style"

interface ListProps {
    teachers: Teacher[],
}

const List = (props: ListProps) => {
    return (
        <div>
            { props.teachers.length > 0 ? (
                <ListStyled>
                    {props.teachers.map(teacher => (
                        <ItemList key={teacher.id}>
                            <Photo src={teacher.photo}></Photo>
                            <Informations>
                                <Name>{teacher.name}</Name>
                                <Price>{teacher.price_hour.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Price>
                                <Description>{teacher.description}</Description>
                                <Button sx={{ width: '70%' }}>Marcar Aula</Button>
                            </Informations>
                        </ItemList>
                    ))}
                </ListStyled>
            ) : (
                <EmptyList>Nenhum professor encontrado</EmptyList>
            )}
        </div>
    )
}

export default List