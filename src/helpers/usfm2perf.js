import {Proskomma} from 'proskomma-core'

export const usfm2perf = (usfm) => {
    let perf;
    try {
        const pk = new Proskomma();
        console.log(pk)
        pk.importDocuments(
            {lang: 'xxx', abbr: 'XXX'}, // doesn't matter...
            ['usfm'], 
            usfm
        )
        console.log(pk)
    } catch (e) {
        console.log(e)
        perf = null
    }
    return perf;
}

/*
  pk.importDocuments(
      {lang: 'xxx', abbr: 'XXX'}, // doesn't matter...
      'usfm', 
      [usfm]
  );
  const perfResultDocument = pk.gqlQuerySync(
      '{documents {id docSetId perf} }')
      .data.documents[0];
  perf = JSON.parse(perfResultDocument.perf);
*/