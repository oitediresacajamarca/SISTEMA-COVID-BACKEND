import { EntityRepository, Repository } from "typeorm";
import { Heatmap } from "./heatmap";


@EntityRepository(Heatmap)
export class HeatmapRepository extends Repository<Heatmap>{

}
