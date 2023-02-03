import "./pokemonTableRow.css"

export default function Pokemergetypes({primaryType, secondaryType})
{
    if(secondaryType == null)
    {
        return(
            <td colSpan={2} className={primaryType.toLowerCase()}>{primaryType}</td>
        )
    }
    else
    {
        return(
            <>
            <td className={primaryType.toLowerCase()}>{primaryType}</td>
            <td className={secondaryType.toLowerCase()}>{secondaryType}</td>
            </>
        )
    }
}