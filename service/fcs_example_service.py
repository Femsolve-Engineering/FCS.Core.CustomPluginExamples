
from fcs_core_model_engine import ( 
    BackendService,
    fcs_command
)

class ExampleBackendService(BackendService):

    def __init__(self, service_name: str):
        """
        Constructor.
        """
        super().__init__(service_name)

#--------------------------------------------------------------------------------------------------
# Startup and finishing stages
#--------------------------------------------------------------------------------------------------

    def run_on_startup(self) -> None:
        """
        When the frontend application has finished initializing, this method is called
        to run on startup.
        """
        self.logger.log('Starting Example 1 Service!')

    def run_on_shutdown(self) -> None:
        """
        When the container was triggered to be closed, then this method is called
        to run a shutdown sequence on the existing data, if needed.
        """
        self.logger.log('Shutting down Example 1 Service!')

#--------------------------------------------------------------------------------------------------
# Custom command implementations
#--------------------------------------------------------------------------------------------------
    
    @fcs_command
    def create_red_cube(self, args: dict) -> dict:
        """
        Creates a simple cube of given size.
        """

        side_length = args['side_length']
        geom_box = self.gb.make_box_dx_dy_dz(side_length, side_length, side_length)
        box_id = self.fv.add_to_document(geom_box,'created_box')
        self.fv.set_specific_object_color(box_id, 255,0,0)
        result = { "id": box_id }
        return result

    @fcs_command
    def load_geom_with_bbox(self, args: dict) -> dict:
        """
        Loads a geometry colors it blue.
        Creates a bounding box, colors it green.
        """

        filepath = args['input_file_path']
        geom_file = self.gb.import_step(filepath, False)
        geom_file_id = self.fv.add_to_document(geom_file,'loaded_geometry')
        self.fv.set_specific_object_color(geom_file_id, 0, 0, 254)

        bbox = self.gb.get_bounding_box_shape(geom_file, False)
        bbox_id = self.fv.add_to_document(bbox, 'bounding_box')
        self.fv.set_specific_object_color(bbox_id, 0, 254, 0)
        return {}
